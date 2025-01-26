export default function handler(req, res) {
  // Get the Referer header
  const referer = req.headers.referer;

  // Your Blogger domain (replace with your actual Blogger domain)
  const allowedReferer = 'https://www.yourbloggerdomain.com';

  // Check if the request's Referer is your Blogger domain
  if (referer && referer.startsWith(allowedReferer)) {
    // If the referrer is valid, serve the file
    res.status(200).sendFile('public/style.css');
  } else {
    // If the referrer is not valid, deny access
    res.status(403).send('Access Forbidden');
  }
}
