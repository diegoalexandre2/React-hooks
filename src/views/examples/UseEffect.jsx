import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    //execicio #01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 100000) {
            document.title = 'Eita!!!'
        }
    }, [fatorial])

    //execicio #02
    const [status, setStatus] = useState('Ímpar')
    useEffect(function () {
        setStatus(number % 2 === 0 ? 'Par ' : 'Ímpar')
    })

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title='Exercicios #01' />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'não existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title='Exercicios #02' />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <sapn className="text red">{status}</sapn>
                </div>

            </div>
        </div>
    )
}

export default UseEffect
