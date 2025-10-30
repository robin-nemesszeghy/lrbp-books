function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  const books = getBooks();

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
    <a href="https://mybook.to/TheBoathouse" target="_blank">
      <figure class="book__img--wrapper">
        <img class="book__img" src="${book.url}" alt="" />
      </figure>
    </a>
    <a
      class="book__title--link"
      href="https://mybook.to/TheBoathouse"
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
  if (!salePrice) {
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
  return [
    {
      id: 1,
      title: "The Boathouse",
      url: "assets/the boathouse.jpg",
      originalPrice: 24.99,
      salePrice: 14.99,
      rating: 4.5,
    },
    {
      id: 2,
      title: "The Boathouse (Second Edition)",
      url: "assets/the boathouse second edition.jpg",
      originalPrice: 24.99,
      salePrice: 14.99,
      rating: 5,
    },
    {
      id: 3,
      title: "Bad Blood CYOA Teaser Book",
      url: "assets/bad blood cyoa.jpg",
      originalPrice: 21.99,
      salePrice: 9.99,
      rating: 5,
    },
    {
      id: 4,
      title: "Benny's Story",
      url: "assets/bennys story.jpg",
      originalPrice: 21.99,
      salePrice: 9.99,
      rating: 5,
    },
    {
      id: 5,
      title: "Bad Blood",
      url: "assets/bad blood.jpg",
      originalPrice: 24.99,
      salePrice: 14.99,
      rating: 5,
    },
    {
      id: 6,
      title: "Killing Jar",
      url: "assets/killing jar.jpg",
      originalPrice: 24.99,
      salePrice: 14.99,
      rating: 5,
    },
    {
      id: 7,
      title: "Human Nature",
      url: "assets/human nature.jpg",
      originalPrice: 24.99,
      salePrice: 14.99,
      rating: 5,
    },
    {
      id: 8,
      title: "Dark Speculations (Volume 1)",
      url: "assets/dark speculations.jpg",
      originalPrice: 27.79,
      salePrice: 19.97,
      rating: 5,
    },
    {
      id: 9,
      title: "Dark Speculations (Volume 2)",
      url: "assets/dark speculations v2.jpg",
      originalPrice: 27.79,
      salePrice: 19.97,
      rating: 4.5,
    },
    {
      id: 10,
      title: "Convergence Point",
      url: "assets/convergence point.jpg",
      originalPrice: 25.99,
      salePrice: 15.99,
      rating: 4.5,
    },
    {
      id: 11,
      title: "Shadows of Justice",
      url: "assets/shadows of justice.jpg",
      originalPrice: 25.99,
      salePrice: 15.99,
      rating: 5,
    },
    {
      id: 12,
      title: "Fractured Code",
      url: "assets/fractured code.jpg",
      originalPrice: 25.99,
      salePrice: 15.99,
      rating: 5,
    },
    {
      id: 13,
      title: "Shattered Realities",
      url: "assets/shattered realities.jpg",
      originalPrice: 25.99,
      salePrice: 15.99,
      rating: 5,
    },
    {
      id: 14,
      title: "Behind the Firewall",
      url: "assets/behind the firewall.jpg",
      originalPrice: 19,
      salePrice: null,
      rating: 4,
    },
    {
      id: 15,
      title: "Endgame Reboot",
      url: "assets/behind the firewall.jpg",
      originalPrice: 16,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
