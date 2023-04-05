package pl.sda.extraproject.bookstore.service;

import pl.sda.extraproject.bookstore.model.Book;

import java.util.Collection;
import java.util.Optional;

public interface BookService<T> {

    Collection<T> findAll();

    Optional<T> findById(Long id);

    T save(T t);

    T update(T t);

    String deleteById(Long id);


}
