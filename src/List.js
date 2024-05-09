import React from 'react';
import { Link } from 'react-router-dom'; // Importiere Link von react-router-dom für die Navigation
import './index.css'; // Importiere die Styles
import './App.css'; // Importiere die Styles

function BlogList({ posts, setPosts }) {
    // Die Funktion deletePost wird definiert, um einen Blog-Post zu löschen
    const deletePost = (id) => {
        // Filtere die vorhandenen Posts und erstelle eine aktualisierte Liste ohne den gelöschten Post
        const updatedPosts = posts.filter(post => post.id !== id);
        // Setze die aktualisierte Liste von Posts mit setPosts
        setPosts(updatedPosts);
    };

    return (
        <div>
            {/* Mappe über die Liste von Posts und rendere für jeden Post einen Abschnitt */}
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2> {/* Rendere den Titel des Posts */}
                    <p>{post.content}</p> {/* Rendere den Inhalt des Posts */}
                    <button onClick={() => deletePost(post.id)}>Delete</button> {/* Rendere einen Button zum Löschen des Posts */}
                    <Link to={`/edit/${post.id}`}>Edit</Link> {/* Rendere einen Link zum Bearbeiten des Posts */}
                </div>
            ))}
            {/* Rendere einen Link zum Erstellen eines neuen Posts */}
            <Link to="/create">Create New Post</Link>
        </div>
    );
}

export default BlogList; // Exportiere die BlogList-Komponente
