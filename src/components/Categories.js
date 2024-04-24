import '../styles/Categories.css'

function Categories({listCategories, categorySelected, setCategorySelected}) {  
  return (
    <div className='lmj-categories'>
      <select value={categorySelected} onChange={(e) => setCategorySelected(e.target.value)} className='lmj-categories-select'>
        <option value="" disabled>Filtrer par catégorie</option>
        {[...listCategories].map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => setCategorySelected('')}>Réinitialiser les filtres</button>
    </div>
  );
}

export default Categories;