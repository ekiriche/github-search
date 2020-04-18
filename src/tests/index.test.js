import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/app/App';
import Pagination from "../components/pagination/Pagination";
import RepositoryCard from "../components/repositoryCard/RepositoryCard";
import SearchBar from "../components/searchBar/SearchBar";

test('expect <App /> to match snapshot', () => {
    const component = renderer.create(
        <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('expect <Pagination /> to match snapshot', () => {
    const component = renderer.create(
        <Pagination activePage={1} totalItems={450} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('expect <RepositoryCard /> to match snapshot', () => {
    const component = renderer.create(
        <RepositoryCard />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('expect <SearchBar /> to match snapshot', () => {
    const component = renderer.create(
        <SearchBar />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});