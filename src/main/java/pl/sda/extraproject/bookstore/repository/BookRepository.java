package pl.sda.extraproject.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.sda.extraproject.bookstore.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
