<template>
    <section class="article-container">
    <v-card v-for="(article, index) in articles" :key="index" class="card-global" @click="showDetails(article)">
        <img :src="article.img" />
        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-text>{{ article.description }}</v-card-text>
        <v-card-text>{{ article.price }}</v-card-text>
    </v-card>
    <article v-if="selectedArticle" class="more-details">
        <v-sheet class="details d-flex align-start"> 
            <v-img  :src="selectedArticle.img" alt="manteau" class="d-flex justify-center align-center" />
            <div class="inside d-flex flex-column w-50">
            <v-icon icon="mdi-window-close" class="ms-auto" @click="closeWindow"></v-icon>
            <h1>{{ selectedArticle.title }}</h1>
            <h2>{{ selectedArticle.price }}</h2>
            <p>{{ selectedArticle.tva }}</p>
            <v-chip-group class="d-flex flex-wrap ma-2">
                <v-chip v-for="(size, sizeIndex) in selectedArticle.sizes" :key="sizeIndex" class="ma-2">{{ size }}</v-chip>
            </v-chip-group>
                <p>{{ selectedArticle.delivery }}</p>
                <v-btn prepend-icon="mdi-cart-outline" color="blue-darken-1" class="btn-cart ma-5" @click="addToCart(selectedArticle)">Add to cart</v-btn>
                <h4>A propos</h4>
                <p>{{ selectedArticle.details }}</p>
                <v-table v-for="(tables, tablesIndex) in tables" :key="tablesIndex">
                    <thead>
                        <tr>
                            <th>Caractéristiques</th>
                            <th>Détails</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Matériaux</td>
                            <td>{{ tables.matériaux }}</td>
                        </tr>
                        <tr>
                            <td>Coupe</td>
                            <td>{{ tables.coupe }}</td>
                        </tr>
                        <tr>
                            <td>Doublure</td>
                            <td>{{ tables.doublure }}</td>
                        </tr>
                        <tr>
                            <td>Poids</td>
                            <td>{{ tables.poids }}</td>
                        </tr>
                        <tr>
                            <td>Entretien</td>
                            <td>{{ tables.entretien }}</td>
                        </tr>
                        <tr>
                            <td>Tailles</td>
                            <td>{{ tables.sizes }}</td>
                        </tr>
                    </tbody>
                </v-table>
                </div>
        </v-sheet>
    </article>
    <v-dialog v-model="dialogVisible" width="auto">
      <v-card
        max-width="400"
        prepend-icon="mdi-cart-check"
        text="Your item has been added to the cart ! Thank you for your purchase"
        title="Article add to cart"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="dialogVisible = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
    </section>
</template>

<script setup>
import { reactive } from 'vue';
import { useNuxtApp } from '#app';
import manteau from '../public/images/manteau.avif';
import gants from '../public/images/gants.avif';
import echarpe from '../public/images/echarpe.avif';
import bonnet from '../public/images/bonnet.avif';

const dialogVisible = ref(false);

      const articles = reactive([ 
        {   img: manteau,
        title: 'Manteau en laine',
        description: 'Un manteau en laine mélangeant élégance et confort',
        price: '34.99€',
        tva: 'Les prix des articles vendus incluent la TVA. En fonction de votre adresse de livraison, la TVA peut varier au moment du paiement.',
        sizes: ['S', 'M', 'L', 'XL'],
        delivery: 'Livraison sous 2 a 5 jours ouvrés en France métropolitaine.',
        details: 'Ce manteau en laine allie élégance et confort. Fabriqué à partir de laine de haute qualité, il vous gardera au chaud tout l\hiver. Sa coupe moderne et ses couleurs variées en font un incontournable de votre garde-robe d\'hiver.'
    },
    {   img: gants,
        title: 'Gants en laine',
        description: 'Des gants en laine parfait pour les journées glaciales',
        price: '9.99€',
        tva: 'Les prix des articles vendus incluent la TVA. En fonction de votre adresse de livraison, la TVA peut varier au moment du paiement.',
        sizes: ['S', 'M', 'L', 'XL'],
        delivery: 'Livraison sous 2 a 5 jours ouvrés en France métropolitaine.',
        details: 'Ces gants en laine allie élégance et confort. Fabriqué à partir de laine de haute qualité, ils vous garderont au chaud tout l\'hiver. Sa coupe moderne et ses couleurs variées en font un incontournable de votre garde-robe d\'hiver.'
    },
    {   img: echarpe,
        title: 'Écharpe en laine',
        description: 'Une écharpe en laine, parfait pour avoir le cou au chaud',
        price: '14.99€',
        tva: 'Les prix des articles vendus incluent la TVA. En fonction de votre adresse de livraison, la TVA peut varier au moment du paiement.',
        sizes: ['S', 'M', 'L', 'XL'],
        delivery: 'Livraison sous 2 a 5 jours ouvrés en France métropolitaine.',
        details: 'Cette écharpe en laine allie élégance et confort. Fabriqué à partir de laine de haute qualité, elle vous gardera au chaud tout l\'hiver. Sa coupe moderne et ses couleurs variées en font un incontournable de votre garde-robe d\'hiver.'
    },
    {   img: bonnet,
        title: 'Bonnet en laine', 
        description: 'Un bonnet en laine, parfait pour garder la tête au chaud tout l\'hiver',
        price: '19.99€',
        tva: 'Les prix des articles vendus incluent la TVA. En fonction de votre adresse de livraison, la TVA peut varier au moment du paiement.',
        sizes: ['S', 'M', 'L', 'XL'],
        delivery: 'Livraison sous 2 a 5 jours ouvrés en France métropolitaine.',
        details: 'Ce bonnet en laine allie élégance et confort. Fabriqué à partir de laine de haute qualité, il vous gardera au chaud tout l\'hiver. Sa coupe moderne et ses couleurs variées en font un incontournable de votre garde-robe d\'hiver.'
    }
        ]);

        const tables = reactive([ 
            {   matériaux: 'Laine',
                coupe: 'Oversize',
                doublure: 'Polyester doux',
                poids: '800g',
                entretien: 'Lavage a sec',
                sizes: 'S, M, L, XL'
            }
        ])

        const selectedArticle = ref(null);

        function showDetails(article) {
         selectedArticle.value = article;
    }
    function closeWindow() {
    selectedArticle.value = null;
    }
    function addToCart(selectedArticle) {
  const { $cart } = useNuxtApp();
  $cart.addToCart(selectedArticle);

  dialogVisible.value = true;
}
    </script>

    <style>

body { 
    font-family: 'Arial', sans-serif;
}

h1, h2, h3, h4 {
    color: #333;
    margin-bottom: 15px;
}
    .article-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
    .card-global { 
    margin: 30px;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    width: 250px;
}

.card-global h3, .card-global p, .card-global h2 {
    padding: 0 15px;
}

.card-global h3 {
    margin-top: 15px;
    color: #333;
}

.card-global p {
    color: #666;
    font-size: 14px;
}

img { 
    object-fit: cover;
    width: 100%;
    height: auto;
}

.details { 
    display: none;
    top: 20%;
    left: 0;
    margin: 0;
    position: absolute;
    background-color: white;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,1);
    box-sizing: border-box;
    padding: 40px;
}
.details .btn { 
    top: 3%;
    left: 98%;
    position: absolute;
}

.details img {
    width: 600px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.btn-cart { 
    padding: 15px;
    width: 200px;
    margin: 10px;
}

.v-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.v-table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 12px;
    text-align: left;
}
th {
    background-color: #f2f2f2;
}
</style>