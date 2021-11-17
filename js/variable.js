//-------------------------- NOMBRES --------------------------
/*
P- PEON
T- TORRE
H- CABALLO
B- ALFIL
K- REY
Q- QUEEN
*/
//Fichas
const PIECES_BLACK = ['B-P', 'B-T', 'B-H', 'B-B', 'B-Q', 'B-K', 'B-B', 'B-H', 'B-T'];
const PIECES_WHITE = ['W-P', 'W-T', 'W-H', 'W-B', 'W-Q', 'W-K', 'W-B', 'W-H', 'W-T'];
//Tableros
let CHESS = [];
let CHESS_HTML;
//columnas/filas inputs
let colsInput = document.getElementById('colsInput');
let rowsInput = document.getElementById('rowsInput');
let columns;
let rows;
//Botones Html
let buttonMake = document.getElementById('make');
let buttonClean = document.getElementById('clean');
//Turno de la ficha
let colorHtml = document.getElementById('turno');
let color = 'W';
//Colores selecionados
const COLOR_SELECT = 'rgb(232, 179, 1)';
const COLOR_MOVE = 'rgb(142, 158, 168)';
//comidos
let whitePiecesHtml = document.getElementById('whitePieces');
let blackPiecesHtml = document.getElementById('blackPieces');
let deadWhitePieces =[];
let deadBlackPieces =[];
//modal
const CONT_MODAL = document.getElementById('contModal');
let modalWhite = document.getElementById('modalWhite');
let modalBlack = document.getElementById('modalBlack');