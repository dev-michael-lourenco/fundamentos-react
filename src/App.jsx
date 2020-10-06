
import './App.css'

import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'


export default (props)=>(
    <div className="App">
        <Card titulo="Home">
            <Primeiro />
        </Card>
        
        <Card titulo="Ranking dia">
            conteudo
        </Card>

        <Card titulo="Premiações">
            conteudo
        </Card>

        <Card titulo="Quem somos">
            conteudo
        </Card>

        <Card titulo="Ranking mes">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Maria</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Ranking ano">
            <ComParametro 
                titulo="Esse é o titulo"
                subtitulo="Esse é o subtitulo"
            />
            <ComParametro 
                titulo="Outro titulo"
                subtitulo="Outro subtitulo"
            /> 
        </Card>

        <Card titulo="Regras">
            <Repeticao/>
        </Card>

        <Card titulo="Participe">
            <Condicional numero={10}/>
        </Card>   
             
        <Card titulo="Opiniões">
            <CondicionalComIf numero={10}/>
        </Card>        
    </div>
)