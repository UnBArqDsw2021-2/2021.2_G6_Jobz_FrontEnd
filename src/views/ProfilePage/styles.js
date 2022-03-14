import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  $primary: #007bff;
  $success: #28a745;
  $danger: #dc3545;
  $warning: #ffc107;

  body {
    background: #f9f9f9;
    font-family: 'Roboto', sans-serif;
  }

  .shadow {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
  }

  .profile-tab-nav {
    min-width: 250px;
  }
  .tab-content {
    flex: 1;
  }
  .form-group {
    margin-bottom: 1.5rem;
  }

  .nav-pills {
    a.nav-link {
      padding: 15px 20px;
      border-bottom: 1px solid #ddd;
      border-radius: 0;
      color: #333;
      i {
        width: 20px;
      }
    }
  }

  .img-circle {
    img {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      border: 5px solid #fff;
    }
  }
`

export const Footer = styled.div`
  margin-top: 50px;
`
