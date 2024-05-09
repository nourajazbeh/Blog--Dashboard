import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importiere useParams und useNavigate von react-router-dom
import './index.css'; // Importiere die Styles
import './App.css'; // Importiere die Styles

function BlogForm({ posts, setPosts }) {
    // Definiere den Zustand für den Titel und den Inhalt des Posts
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // Extrahiere die id aus den URL-Parametern
    const { id } = useParams();
    // Verwende useNavigate, um die Navigation innerhalb der App zu steuern
    const navigate = useNavigate();

    // useEffect wird verwendet, um das Formular für die Bearbeitung vorzufüllen, wenn eine id vorhanden ist
    useEffect(() => {
        if (id) {
            const postToEdit = posts.find(post => post.id === Number(id));
            if (postToEdit) {
                setTitle(postToEdit.title);
                setContent(postToEdit.content);
            }
        }
    }, [id, posts]);

    // handleSubmit wird aufgerufen, wenn das Formular abgesendet wird
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            if (id) {
                // Bearbeite den Post
                const updatedPosts = posts.map(post =>
                    post.id === Number(id) ? { id: Number(id), title, content } : post
                );
                setPosts(updatedPosts);
            } else {
                // Füge einen neuen Post hinzu
                const newPost = { id: posts.length + 1, title, content };
                setPosts([...posts, newPost]);
            }
            // Navigiere zurück zur Blog-Liste nach dem Absenden des Formulars
            navigate('/');
        } else {
            alert('Enter title and content.');
        }
    };

    return (
        // Rendere das Formular zum Erstellen/Bearbeiten von Blog-Posts
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
            {/* Der Text des Buttons ändert sich je nachdem, ob es sich um eine Bearbeitung oder ein neues Erstellen handelt */}
            <button type="submit">{id ? 'Update' : 'Submit'}</button>
        </form>
    );
}

export default BlogForm; // Exportiere die BlogForm-Komponente
