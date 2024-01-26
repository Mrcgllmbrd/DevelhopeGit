*You decide to remove a book with BookID = 101 from the Books table. Ensure this change is saved permanently.*

      BEGIN TRANSACTION;
      DELETE from Books where book_id = 101;
      COMMIT;