
import 'package:crystallize_flutter_boilerplate/config/crystallize.dart';
import 'package:crystallize_flutter_boilerplate/graphql/queries.dart';
import 'package:flutter/widgets.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class GetCataloguesWidget extends StatelessWidget {
  const GetCataloguesWidget({ @required this.url });
  final String url;
  // final String tenantID = Crystallize.CRYSTALLIZE_TENANT_ID;

  @override
  Widget build(BuildContext context) {
    // Replace this with your build function
    return Query(
        getCatalogues,
        builder: ({bool loading, Map<String, dynamic> data, Exception error}) {
          if (loading) {
            return Text('Loading data');
          }

          if (error != null) {
            return Text(error.toString());
          }

          // it can be either Map or List
          List repositories = data['catalogue']['children'];

          return ListView.builder(
              itemCount: repositories.length,
              itemBuilder: (context, index) {
                final repository = repositories[index];

                return Text(repository['name']);
              });
        },
    );
  }
}
