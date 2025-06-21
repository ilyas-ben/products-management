package com.ilyas.productmanagement.service.product;

import com.ilyas.productmanagement.model.Product;
import com.ilyas.productmanagement.repo.ProductRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductServiceImplTest {

    @Mock
    private ProductRepo repository;

    @InjectMocks
    private ProductServiceImpl service;

    private Product product;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        product = new Product();
        product.setId(1);
        product.setName("Keyboard");
        product.setPrice(100);
    }

    @Test
    void testFindAll() {
        when(repository.findAll()).thenReturn(Arrays.asList(product));
        List<Product> result = service.findAll();
        assertEquals(1, result.size());
        assertEquals("Keyboard", result.get(0).getName());
    }

    @Test
    void testFindById() {
        when(repository.findById(1)).thenReturn(Optional.of(product));
        Product result = service.findById(1);
        assertNotNull(result);
        assertEquals("Keyboard", result.getName());
    }

    @Test
    void testSave() {
        when(repository.save(product)).thenReturn(product);
        Product result = service.save(product);
        assertNotNull(result);
        assertEquals(100, result.getPrice());
    }

    @Test
    void testDeleteById() {
        doNothing().when(repository).deleteById(1);
        service.deleteById(1);
        verify(repository, times(1)).deleteById(1);
    }
}
