import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    // useEffect: dispara uma função quando algo acontecer
    useEffect(() => {
        fetch('https://api.github.com/users/besopmac/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, [])

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {
                    repositories && repositories.map(repo =>
                        <RepositoryItem key={repo.id} repository={repo} />
                    )
                }
            </ul>
        </section>
    );
}