<template>
    <header>
        <img class="urban" src="../images/urban.png" alt="Urbanstyle">
        <section class="intro d-flex ga-5">
            <NuxtLink to="/" id="cart-link">
            <v-icon icon="mdi-home-outline"></v-icon>
        </NuxtLink>
        <v-icon icon="mdi-account-outline"></v-icon>
        <NuxtLink to="/panier" id="cart-link">
            <v-icon icon="mdi-cart-outline"></v-icon>
        </NuxtLink>
        </section>
    </header>
    <h1>Saison Hivernale</h1>
    <h2>Recommander pour vous</h2>
    <article class="link-container">
            <a href="#">Homme</a>
            <a href="#">Femme</a>
            <a href="#">Enfant</a>
            <a href="#">Saisons</a>
            <a href="#">Collections</a>
    </article>
</template>

<style>

header { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    box-sizing: border-box;
}

a { 
    text-decoration: none;
    color: black;
}

.urban { 
    width: auto;
    height: 80px;
}
.intro { 
    display: flex;
    align-items: center;
}
.intro img {
    width: 24px;
    height: 24px;
    margin-left: 20px;
    transition: transform 0.3s ease;
}
.intro img:hover {
    transform: scale(1.1);
}
.loupe, .profile, .panier { 
    margin-right: 20px;
}
.search { 
    display: none;
}
.search-input {
    margin-right: 30px;
    width: 250px;
    height: 35px;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #3498db;
    border-radius: 25px;
    outline: none;
    transition: all 0.3s ease-in-out;
    background-color: #f8f8f8;
    color: #333;
  }
  
  .search-input:focus {
    width: 280px;
    border-color: #2980b9;
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5);
    background-color: #fff;
  }
  
  .search-input::placeholder {
    color: #95a5a6;
  }
  
  .search-input:hover {
    border-color: #2980b9;
  }
.link-container {
    display: flex;
    justify-content: center;
    background-color: #f8f8f8;
    padding: 10px 0;
}
.link-container a {
    text-decoration: none;
    margin: 0 15px;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}
.link-container a:hover {
    color: #007bff;
}
</style>