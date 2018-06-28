const GRID_HEIGHT_FIELD = document.getElementById( 'inputHeight' );
const GRID_WIDTH_FIELD = document.getElementById( 'inputWeight' );
const COLOR_PICKER = document.getElementById( 'colorPicker' );

//Using jQuery selector here so you can use jQuery functions to manipulate the elements
const PIXEL_CANVAS = $( '#pixelCanvas' );
const SUBMIT_BUTTON = $( '#btn' );

/**
* @description Creates the grid dynamically
*/

function makeGrid() {
    // Your code goes here!

    let tempRow, cell;

    for( let row = 0; row < GRID_HEIGHT_FIELD.value; row++ ) {
        tempRow = PIXEL_CANVAS.append( '<tr></tr>' );

        for( let col = 0; col < GRID_WIDTH_FIELD.value; col++ ) {
            cell = tempRow.append( '<td></td>' );
        }
    }
}

/**
* @description Clears current grid, if there's any, including event handlers
* @param {object} grid - The table DOM element representing the grid
*/

function clearGrid( grid ) {
    let gridSize = grid.children( 'tr' ).length;

    if( gridSize > 0 ) {
        grid.empty();
    }
}

SUBMIT_BUTTON.on( 'click', function() {
    if( GRID_HEIGHT_FIELD.value > 0 && GRID_WIDTH_FIELD.value > 0 ) {
        clearGrid( PIXEL_CANVAS );
        makeGrid();
    }
});

PIXEL_CANVAS.on( 'click', 'td', function( event ) {
    event.preventDefault();

    let activeGridCell = $( this );
    changeGridBackgroundColor( activeGridCell, COLOR_PICKER.value );
});

/**
* @description Changes active grid color
* @param {object} gridCell - The active grid cell
* @param {string} color - Color to change grid cell background to
*/

function changeGridBackgroundColor( gridCell, color ) {
    gridCell.css( 'background-color', color );
}