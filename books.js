let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += " books__loading";

  if (!books) {
    books = await getBooks();
  }

  booksWrapper.classList.remove("books__loading");

  if (filter === "LOW_TO_HIGH") {
    books.sort(
      (a, b) =>
        (a.salePrice ?? a.originalPrice) - (b.salePrice ?? b.originalPrice)
    );
  } else if (filter === "HIGH_TO_LOW") {
    books.sort(
      (a, b) =>
        (b.salePrice ?? b.originalPrice) - (a.salePrice ?? a.originalPrice)
    );
  } else if (filter === "RATING") {
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml = books
    .map((book) => {
      return `<div class="book">
    <a href="${book.url}" target="_blank">
      <figure class="book__img--wrapper">
        <img class="book__img" src="${book.image}" alt="" />
      </figure>
    </a>
    <a
      class="book__title--link"
      href="${book.url}"
      target="_blank"
    >
      <div class="book__title">${book.title}</div>
    </a>
    <div class="book__ratings">${ratingsHtml(book.rating)}</div>
    <div class="book__price">
      ${priceHtml(book.originalPrice, book.salePrice)}
    </div>
  </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
}

function priceHtml(originalPrice, salePrice) {
  if (salePrice === null) {
    return `$${originalPrice.toFixed(2)}`;
  }
  return `<span class="book__price--normal">$${originalPrice.toFixed(
    2
  )}</span> $${salePrice.toFixed(2)}`;
}

function ratingsHtml(rating) {
  let ratingHtml = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHtml += '<i class="fa-solid fa-star"></i>';
  }
  if (!Number.isInteger(rating)) {
    ratingHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  return ratingHtml;
}

function filterBooks(event) {
  renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});

// BOOKS DATA

function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "The Boathouse",
          image: "assets/the boathouse.jpg",
          url: "https://mybook.to/TheBoathouse",
          originalPrice: 24.99,
          salePrice: 14.99,
          rating: 4.5,
        },
        {
          id: 2,
          title: "The Boathouse (Second Edition)",
          image: "assets/the boathouse second edition.jpg",
          url: "https://mybook.to/TheBoathouseBook",
          originalPrice: 24.99,
          salePrice: 14.99,
          rating: 5,
        },
        {
          id: 3,
          title: "Bad Blood CYOA Teaser Book",
          image: "assets/bad blood cyoa.jpg",
          url: "https://mybook.to/BadBloodCYOA",
          originalPrice: 21.99,
          salePrice: 9.99,
          rating: 5,
        },
        {
          id: 4,
          title: "Benny's Story",
          image: "assets/bennys story.jpg",
          url: "https://mybook.to/BennyStory",
          originalPrice: 21.99,
          salePrice: 9.99,
          rating: 5,
        },
        {
          id: 5,
          title: "Bad Blood",
          image: "assets/bad blood.jpg",
          url: "https://mybook.to/BadBloodAdventure",
          originalPrice: 24.99,
          salePrice: 14.99,
          rating: 5,
        },
        {
          id: 6,
          title: "Killing Jar",
          image: "assets/killing jar.jpg",
          url: "https://mybook.to/KillingJar",
          originalPrice: 24.99,
          salePrice: 14.99,
          rating: 5,
        },
        {
          id: 7,
          title: "Human Nature",
          image: "assets/human nature.jpg",
          url: "https://mybook.to/HumanNatureAdventure",
          originalPrice: 24.99,
          salePrice: 14.99,
          rating: 5,
        },
        {
          id: 8,
          title: "Dark Speculations (Volume 1)",
          image: "assets/dark speculations.jpg",
          url: "https://mybook.to/DarkSpeculationsV1",
          originalPrice: 27.79,
          salePrice: 19.97,
          rating: 5,
        },
        {
          id: 9,
          title: "Dark Speculations (Volume 2)",
          image: "assets/dark speculations v2.jpg",
          url: "https://mybook.to/DarkSpeculationsV2",
          originalPrice: 27.79,
          salePrice: 0,
          rating: 4.5,
        },
        {
          id: 10,
          title: "Convergence Point",
          image: "assets/convergence point.jpg",
          url: "https://mybook.to/ConvergencePoint",
          originalPrice: 25.99,
          salePrice: 15.99,
          rating: 4.5,
        },
        {
          id: 11,
          title: "Shadows of Justice",
          image: "assets/shadows of justice.jpg",
          url: "https://mybook.to/ShadowsOfJustice",
          originalPrice: 25.99,
          salePrice: 15.99,
          rating: 5,
        },
        {
          id: 12,
          title: "Fractured Code",
          image: "assets/fractured code.jpg",
          url: "https://mybook.to/FracturedCode",
          originalPrice: 25.99,
          salePrice: 15.99,
          rating: 5,
        },
        {
          id: 13,
          title: "Shattered Realities",
          image: "assets/shattered realities.jpg",
          url: "https://mybook.to/ShatteredRealities",
          originalPrice: 25.99,
          salePrice: 15.99,
          rating: 5,
        },
        {
          id: 14,
          title: "Behind the Firewall",
          image: "assets/behind the firewall.jpg",
          url: "https://www.amazon.com/Behind-Firewall-Echo-Protocol-Book-ebook/dp/B0FR2N9GM5/",
          originalPrice: 19,
          salePrice: null,
          rating: 4,
        },
        {
          id: 15,
          title: "Endgame Reboot",
          image: "assets/behind the firewall.jpg",
          url: "https://mybook.to/EchoProtocol",
          originalPrice: 16,
          salePrice: null,
          rating: 4.5,
        },
      ]);
    }, 1000);
  });
}
