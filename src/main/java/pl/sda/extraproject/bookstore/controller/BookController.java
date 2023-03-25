package pl.sda.extraproject.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.sda.extraproject.bookstore.model.Book;
import pl.sda.extraproject.bookstore.service.BookService;

import java.util.Collection;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity <Collection<Book>> findAll() {
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.findById(id), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> save(@RequestBody Book book) {
        return new ResponseEntity<>(bookService.save(book), HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> update(@RequestBody Book book) {
        return new ResponseEntity<>(bookService.update(book), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Book> deleteById(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.deleteById(id), HttpStatus.OK);
    }
}
