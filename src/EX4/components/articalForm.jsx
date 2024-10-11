import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addArticle, editArticle } from '../articalSlice';

const AddEditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Récupérer l'article si un ID est présent dans les paramètres (mode édition)
  const article = useSelector(state =>
    state.articles.articles.find(article => article.id === parseInt(id))
  );

  // État pour les champs du formulaire
  const [designation, setDesignation] = useState('');
  const [famille, setFamille] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (article) {
      setDesignation(article.designation);
      setFamille(article.famille);
    }
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (article) {
      // Mode édition
      const updatedArticle = {
        id: article.id,
        designation,
        famille,
        image: image ? URL.createObjectURL(image) : article.image, // Conserve l'image si non modifiée
      };
      dispatch(editArticle(updatedArticle));
    } else {
      // Mode ajout
      const newArticle = {
        id: Date.now(),
        designation,
        famille,
        image: URL.createObjectURL(image),
      };
      dispatch(addArticle(newArticle));
    }
    navigate('/storeredux'); // Redirige après l'ajout ou l'édition
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3 container m-auto">
      <h2 className="text-center">{article ? 'Modifier' : 'Ajouter'} un article</h2>
      <div className="col-12">
        <input
          type="text"
          placeholder="Désignation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          placeholder="Famille"
          value={famille}
          onChange={(e) => setFamille(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="col-12">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
          className="form-control"
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          {article ? 'Modifier' : 'Ajouter'} l'article
        </button>
      </div>
    </form>
  );
};

export default AddEditArticle;
