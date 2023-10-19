import { reactive } from 'vue';

const state = reactive({
  library: [
    {
      id: 1,
      title: 'The Power of Letting Go',
      author: 'John Purkiss',
      pageCount: 221,

    },
    {
      id: 2,
      title: 'Diary of a Wimpy Kid (Diary of a Wimpy Kid #1)',
      author: 'Jeff Kinney',
      pageCount: 176,
    },
    {
      id: 3,
      title: 'Wonder',
      author: 'R. J. Palacio',
      pageCount: 337,
    },
    {
      id: 4,
      title: 'Alice in Wonderland',
      author: 'Lewis Carrol',
      pageCount: 422,
    },
  ]
});

let lastBookId = Math.max(...state.library.map(book => book.id), 0);


export default state;