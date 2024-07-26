import React, { useState, useEffect } from 'react';

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace with your API URL
        const category = 'happiness';
        const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const apiKey = 'r4SYicOuMHpe70rlcdlcgw==8ypjfsmvaVY9ptJU';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${ response.status } ${ response.statusText }`);
                }
            })
            .then(data => {
                setQuote(data[0].quote);
                setAuthor(data[0].author);
                setLoading(false);
                console.log(data);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            {loading ? (
                <p className="text-gray-600 text-center">Loading...</p>
            ) : error ? (
                <p className="text-red-500 text-center">Error fetching quote</p>
            ) : (
                <div className="flex flex-col items-center text-center">
                    {/* Quote Text */}
                    <p className="text-xl font-semibold text-gray-800 italic mb-4">
                        "{quote}"
                    </p>

                    {/* Author Name */}
                    <p className="text-md font-medium text-gray-600">
                        - {author}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-4 border-t-2 border-gray-300 w-1/2 mx-auto"></div>

                    {/* Additional Info or Date */}
                    <p className="text-sm text-gray-500 text-center mt-4">
                        Quote of the Day
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quotes;
