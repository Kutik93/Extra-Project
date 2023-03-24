package pl.sda.extraproject.bookstore.service.impl;

import org.springframework.stereotype.Service;
import pl.sda.extraproject.bookstore.model.Book;
import pl.sda.extraproject.bookstore.service.BookService;

import java.util.Collection;

@Service
public class BookServiceImpl implements BookService {
    @Override
    public Collection<Book> findAll() {
        return null;
    }

    @Override
    public Book findById(Long id) {
        return null;
    }

    @Override
    public Book save(Book book) {
        return null;
    }

    @Override
    public Book update(Book book) {
        return null;
    }

    @Override
    public Book deleteById(Long book) {
        return null;
    }
}
