import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteArticle } from '../articalSlice';

const ListArticle = () => {
  const articles = useSelector(state => state.articles.articles);
  const dispatch = useDispatch();

  return (
    <>
    <Link to="/add" className='btn btn-success w-25 mt-5 m-auto d-block container'>Ajouter un article</Link>
    <hr />
    <div className="d-flex flex-wrap">
      {articles.map(article => (
        <div key={article.id} className="card m-3 col-md-2">
          <img src={article.image} className="card-img-top" alt={article.designation} width="100" />
          <div className="card-body">
            <h5 className="card-title">{article.designation}</h5>
            <p className="card-text">{article.famille}</p>
            <hr />
            <button onClick={() => dispatch(deleteArticle(article.id))} className="btn btn-danger mx-2 w-50">Supprimer</button>
            <Link to={`/edit/${article.id}`} className="btn btn-primary  mx-2">Modifier</Link>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ListArticle;
