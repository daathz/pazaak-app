import ghpages from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/daathz/pazaak-app.git',
        user: {
            name: 'Viktor Novák',
            email: 'novk.viktor@gmail.com'
        }
    },
    () => console.log('Deploy complete!')
)