import 'package:crystallize_flutter_boilerplate/config/crystallize.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:crystallize_flutter_boilerplate/screens/cart_page/cart_page.dart';
import 'package:crystallize_flutter_boilerplate/screens/checkout_page/checkout_page.dart';
import 'package:crystallize_flutter_boilerplate/screens/home_page/home_page.dart';
import 'package:crystallize_flutter_boilerplate/screens/product_page/product_page.dart';

void main() => runApp(MyCrystallizeApp());

class MyCrystallizeApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    ValueNotifier<Client> client = ValueNotifier(
      Client(
        endPoint: Crystallize.CRYSTALLIZE_API_URL + '/graphql',
        cache: InMemoryCache(),
      ),
    );

    return GraphqlProvider(
      client: client,
      child: CacheProvider(
        child: MaterialApp(
          title: 'Flutter Demo',
          theme: ThemeData(
            primarySwatch: Colors.blue,
          ),
          initialRoute: '/',
          routes: <String, WidgetBuilder>{
            '/': (BuildContext context) => new HomePage(),
            '/product': (BuildContext context) => new ProductPage(),
            '/cart': (BuildContext context) => new CartPage(),
            '/checkout': (BuildContext context) => new CheckoutPage(),
          },
        ),
      ),
    );
  }
}
