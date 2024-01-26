*You want to add more details about each book. Modify the "Books" table to include columns for the publisher and the number of pages.*

      ALTER TABLE Books
        ADD COLUMN publisher TEXT NOT NULL,
        ADD COLUMN num_pages INTEGER ;


# suppongo che il numero di pagine sia un'informazione spesso opzionale, quindi non aggiungerei l'obbligo di inserimento
