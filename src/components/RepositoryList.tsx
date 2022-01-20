import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

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
                    repositories && repositories.map(repository =>
                        <RepositoryItem key={repository.name} repository={repository} />
                    )
                }
            </ul>
        </section>
    );
}