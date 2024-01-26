*Imagine you're designing a database to manage a bookstore. Create a table named "Books" with attributes for book_id, title, author, genre, published_year, isbn, price, rating, and stock_count*

      CREATE TABLE IF NOT EXISTS Books (
        book_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        genre TEXT NOT NULL,
        published_year INTEGER NOT NULL,
        isbn INTEGER NOT NULL,
        price DECIMAL NOT NULL,
        rating INTEGER NOT NULL,
        stock_count INTEGER NOT NULL
      );
