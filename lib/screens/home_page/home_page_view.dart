import 'package:crystallize_flutter_boilerplate/hatches/get_catalogues_widget.dart';
import 'package:flutter/material.dart';
import './home_page_view_model.dart';

class HomePageView extends HomePageViewModel {

  @override
  Widget build(BuildContext context) {

    // Replace this with your build function
    return Scaffold(
      appBar: AppBar(
        title: Text('Crystallize App'),
      ),
      body: Container(
        child: GetCataloguesWidget(url: '/'),
      ),
    );
  }
}

