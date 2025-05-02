import './fonts.css';
import './style.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


export default RootLayout;