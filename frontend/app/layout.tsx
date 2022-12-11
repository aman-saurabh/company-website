import '../styles/globals.css'

//For details about how to use "app" folder inplace fo pages folder check following link :
// https://beta.nextjs.org/docs/upgrade-guide
// https://beta.nextjs.org/docs/data-fetching/fundamentals

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body>
                <h2>App Layout</h2>
                {children}
            </body>
        </html>
    );
}