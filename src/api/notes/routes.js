const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    // * postNoteHandler hanya menerima dan menyimpan "satu" note.
    handler: handler.postNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    // * getNotesHandler mengembalikan "banyak" note.
    handler: handler.getNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    // * getNoteByIdHandler mengembalikan "satu" note.
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    // * putNoteByIdHandler hanya menerima dan mengubah "satu" note.
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
