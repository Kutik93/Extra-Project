package pl.sda.extraproject.bookstore.service;

import pl.sda.extraproject.bookstore.model.Book;

import java.util.Collection;

public interface BookService {

    Collection<Book> findAll();

    Book findById(Long id);

    Book save(Book book);

    Book update(Book book);

    Book deleteById(Book book);


}
