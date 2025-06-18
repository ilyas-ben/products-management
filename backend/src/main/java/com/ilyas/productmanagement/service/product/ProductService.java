package com.ilyas.productmanagement.service.product;


import com.ilyas.productmanagement.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
    Product findById(int id);
    Product save(Product newProduct);
    void deleteById(int id);
}
