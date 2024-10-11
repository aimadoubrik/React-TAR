import React, { useReducer } from 'react'

const initialState = {
    poids: 0,
    taille: 0,
    bmi: 0,
    message : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POIDS':
            return { ...state, poids: action.poids, message: "" }
        case 'SET_TAILLE':
            return { ...state, taille: action.taille, message: "" }
        case 'CALCULER_BMI':
            const bmi = (state.poids / (state.taille / 100) ** 2).toFixed(2)
            let message = ""
            if (bmi < 18.5) {
                message = "Vous êtes en sous-poids"
            } else if (bmi < 25) {
                message = "Vous avez un poids normal"
            } else if (bmi < 30) {
                message = "Vous êtes en surpoids"
            } else {
                message = "Vous êtes obèse"
            }
            return { ...state, bmi, message }
        default:
            return state
    }
}

const BMI = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChangePoids = (e) => {
        dispatch({ type: 'SET_POIDS', poids: Number(e.target.value) })
    }

    const handleChangeTaille = (e) => {
        dispatch({ type: 'SET_TAILLE', taille: Number(e.target.value) })
    }

    const handleClick = () => {
        dispatch({ type: 'CALCULER_BMI' })
    }

    return (
        <div className="container">
            <h1 className="text-center">BMI</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="poids" className="form-label">Poids en Kg</label>
                    <input type="number" className="form-control" id="poids" value={state.poids} onChange={handleChangePoids} />
                </div>
                <div className="mb-3">
                    <label htmlFor="taille" className="form-label">Taille en cm</label>
                    <input type="number" className="form-control" id="taille" value={state.taille} onChange={handleChangeTaille} />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Calculer</button>
            </form>
            <div className='border rounded-3 p-3 mt-3'>
                <h4>Votre BMI : {state.bmi}</h4>
                <hr />
                {state.message && <p className="mt-3 alert alert-info">{state.message}</p>}
            </div>
        </div>
    )
}

export default BMI

