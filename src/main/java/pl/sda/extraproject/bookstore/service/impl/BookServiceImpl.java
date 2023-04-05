package pl.sda.extraproject.bookstore.service.impl;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.sda.extraproject.bookstore.model.Book;
import pl.sda.extraproject.bookstore.repository.BookRepository;
import pl.sda.extraproject.bookstore.service.BookService;

import java.util.Collection;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService<Book> {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Collection findAll() {
        return (Collection<Book>) bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book update(Book book) {
        return bookRepository.save(book);
    }


    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        bookRepository.deleteById(id);
        jsonObject.put("message", "Book deleted successfully");
        return jsonObject.toString();
    }
}
