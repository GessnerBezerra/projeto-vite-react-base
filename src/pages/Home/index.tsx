import React, { useEffect, useState } from 'react';

import BasicTable from '../../components/table';

export const Home: React.FC = () => {
	const [repositorio, setRepositorio] = useState([]);

	useEffect(() => {
		async function repositorios() {
			const resposta = await fetch('aqui vai a URL da API');
			const lstRepositorios = await resposta.json();
			console.log(lstRepositorios); //apenas para confirmar no console se os dados estão sendo pegos
			return setRepositorio(lstRepositorios);
		}
		repositorios();
	}, []);

	return <>{BasicTable(repositorio)}</>; //monta o elemento definido na função usando os dados do novo estado do useState
};
