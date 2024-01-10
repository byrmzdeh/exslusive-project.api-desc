import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="one">
        <ul>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <h3>Get 10% off your first order</h3>
          <div className='input'>
            <input type="text" placeholder='Enter your email' />
            <i className='fa-solid fa-heart'></i>
          </div>
        </ul>
      </div>
      <div className="two">
        <h2>Support</h2>
        <h3>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</h3>
        <h3>exclusive@gmail.com</h3>
        <h3>+88015-88888-9999</h3>
      </div>
      <div className="three">
        <h2>Account</h2>
        <h3>Login / Register</h3>
        <h3>Cart</h3>
        <h3>Wishlist</h3>
        <h3>Shop</h3>
      </div>
      <div className="four">
        <h2>Quick Link</h2>
        <h3>Privacy Policy</h3>
        <h3>Terms Of Use</h3>
        <h3>FAQ</h3>
        <h3>Contact</h3>
      </div>
      <div className="five">
        <h2>Download App</h2>
        <p>Save $3 with App New User Only</p>
        <div className='picture'>
          <img width={100} src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1704067200&Signature=hf2OfffRJ0Lf3zXK4JfrObhSieZEK5CHxgTSBqMSoZHiRMijoaJQTQ2G51jhx70Jk7RSGSix6UutDS1hsFpFrGds6LhFcnEbxbVRT3xJ7ttal-aaT~dVw1n-3FjKuYsraFL~~z7SXSZRfdRb2NXaBD6xbIaxiw-LOvykTx0Wxwlv7UXl~SBSG20VTa-OR-H1xJtz0ZE9FBlRch4MMMcemYGu18VLsWlaXMb1~UYlG5wWOFqv4Fo29FbVjAWwLKldFeCb76QdcLLz9Nj6gjETFNP5Gv5Bk46uDYo3i3m8MjMkKyOz8KSUiehxdujxU5RrQy3Mtymi9f1gy0WJYSBONg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="err" />
          <div className='query'>
            <img width={100} src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1704067200&Signature=l0~5JSQdj-rVNNWv81m8fVDpNvkRSZVsDZBzX8GUHn2UL61AKH0QzpUOHUuFY2kZA8krrx0l1HfJlrhfTXvi2KMCcN59Cqmmo23FM~nrJia6PEBrcb9Kv4Cz5wbkxTLVAvuSfQG3PFCr~LBeB5xAvjPzVems6rhMJMvh1~Li7HshKm0oYYMOrSkrF2lFTXfGjnuOYPJHwxQlY6Io9aMHqrGUaNmoEmKJU-X7gjqHjv78ElsS1WkRP64X4JA2C0r02~csm4ZVF23w0I3gM~4RRFpxTizNaIOjkR7nLlHoBknfuT-N6s37GCoZJ6A1iGnmiukO~WvUMYMoGVTR0Vr8Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="err" />
            <img width={100} src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1704067200&Signature=TliNm0-~pHhKzFUzg1ZMJu17QsFeE7jer-Uxx0Xl6PJZ4DxRJ4yguPdZa6beoj9gQkmzkAqH9140C3YjGxUq91EM~zOrOAdbXNBbiKlky7-w8Rj-90BQH87kaFi6EFKerlEfdLOLWMz834QsPfiaQ5eyxYIkhHGdgXeZr19Vmw8oRktBjbkE1R1lbyMnrnKlUws6y38pWSD2jjD8nuLU-QubrNc-Q1akCB4DhJhjLUImGf19F4SMAeJbjNu4hwm3yINS-FNVJB4TBnpns0iuO2yH8wUBxEa37218SHMpxVpiL3BVfDpfMdTUb6hHkl1Qpzj7JrXFcKd0WSXD6Rsj6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="err" />
          </div>
        </div>

        <div className="icon">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>

      </div>
    </div>
  )
}

export default Footer
