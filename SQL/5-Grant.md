*You've hired an assistant for the bookstore named Martin. Grant him permission to view and update the Books table, but he shouldn't be able to delete any records. IP address of Martinis martin@localhost .*

      GRANT UPDATE,SELECT
      ON Books
      FROM 'martin@localhost'

