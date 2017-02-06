/* @flow */
/* global require: true */

const R = require("ramda");
const Maybe = require("ramda-fantasy").Maybe;
const Just = Maybe.Just;
const Nothing = Maybe.Nothing;

/* 1. User can insert an item.
 * 2. What the user inserts must be added to the li (list).
 * 3. User must be able to sort items alphabetically.
 * 4. User must be able to Capitalize the first letter in all items.
 */

// DOM Elements

const array_input: any = document.querySelector(".array-input"),
    add_button: any = document.querySelector(".insert-item"),
    list_display: any = document.querySelector(".items-list"),
    sort_button: any  = document.querySelector(".sort-button"),
    capitalize_button: any  = document.querySelector(".capitalize-button");


// Types & Model
type items = Array<string>;
const itemList: items = [];



//Update
const createList = (item: ?string): items => {

    if ( typeof item !== "string" ) {
        Nothing(item);
        return itemList;

    }else {

        let theItem = Just(item).getOrElse();
        return R.append( theItem, itemList );

    }
};


//View

const createLi = ( item: string ): HTMLElement => {

    const liNode = document.createElement("li");
    const liText = document.createTextNode( item );
    liNode.appendChild(liText);

    return list_display.appendChild(liNode);

};

const renderList = ( items: items ): items => {

    if (R.contains("", items)) {

        return items;

    } else {

        const newLiNode = R.map( createLi, items );
        array_input.value = "";
        return newLiNode;

    }
};


//Add
const listOperations = R.pipe( createList, renderList );
add_button.onclick = function () {

    return listOperations( array_input.value );

};

const returnInnerHTML = (childNodes: HTMLElement): Array<string> => {

    return R.map( liNode => liNode.innerHTML, childNodes );

};

//Sort
const sortList = (itemList: items): items => {

    if (R.contains("", itemList)) {

        return itemList;

    } else {

        list_display.innerHTML = "";
        return R.sort(diffStrings, itemList);

    }

};

const diffStrings = function (a: string, b: string) {
    if ( a < b ) {

        return -1;

    } else if ( a > b ) {

        return 1;

    }else {

        return 0;

    }
};


const sortOperations = R.pipe(returnInnerHTML, sortList, renderList);
sort_button.onclick = function () {

    return sortOperations(list_display.childNodes);

};


//Capitalize

const capitalize = ( str: string ): string => {

    const head = str.charAt(0);
    const headCap = R.toUpper( head );
    list_display.innerHTML = "";
    return R.replace( head, headCap, str );

};

const capitalizeOperations = R.pipe(returnInnerHTML, R.map(capitalize), renderList);
capitalize_button.onclick = function () {

    return capitalizeOperations(list_display.childNodes);

};









