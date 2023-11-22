
const books = [
  {
  id: '001',
  title: 'Atomic Hsbits',
  author: 'James Clear'
},
{
  id: '002',
  title: 'Things Fall Apart',
  author: 'Chinua Achebe'
},
{
  id: '003',
  title: 'Harry Potter',
  author: 'JK Rowling'
},
{
  id: '004',
  title: 'Summer Desserts',
  author: 'Danielle Steele'
},
{
  id: '005',
  title: 'A Perfect Gentleman',
  author:'Danielle Steele'
},
{
  id: '006',
  title: 'And Then I Met You',
  author: 'Ella Dien'
},
]

const bookCard = books.map(book => (
  <section key={book.id} className="p-[4rem] shadow-2xl">
    <h2>{book.title}</h2>
    <p>{book.author}</p>
  </section>
))


export default function Course() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {bookCard}
    </div>
  )
}
