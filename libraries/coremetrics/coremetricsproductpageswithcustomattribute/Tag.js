//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsproductpageswithcustomattribute.Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Product pages (with Custom Attribute)",
		async: true,
		description: "The same as the product page tag, but with the extra parameter to distinguish a specific type of product page view content.",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "libs.coremetrics.com/eluminate.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "CoreMetrics Client ID",
			description: "The ID corresponding to you given by CoreMetrics",
			token: "client_id",
			uv: ""
		},
		{
			name: "CoreMetrics Data Collection Method",
			description: "Boolean: true means client managed, false means CM managed",
			token: "data_collection_method",
			uv: ""
		},
		{
			name: "CoreMetrics Data Collection Domain",
			description: "The domain that the data will be collected on",
			token: "data_collection_domain",
			uv: ""
		},
		{
			name: "CoreMetrics Cookie Domain",
			description: "The domain for CM cookies to be set to",
			token: "cookie_domain",
			uv: ""
		},
		{
			name: "CoreMetrics Product Page ID",
			description: "The ID specific to the current page",
			token: "page_id",
			uv: ""
		},
		{
			name: "CoreMetrics Product Category ID",
			description: "The category for the product on the current page view",
			token: "category_id",
			uv: ""
		},
		{
			name: "Product ID",
			description: "The ID specific to the product on the current page",
			token: "product_id",
			uv: "universal_variable.product.id"
		},
		{
			name: "Product Name",
			description: "The name of the product on the current page view",
			token: "product_name",
			uv: "universal_variable.product.name"
		},
		{
			name: "Custom Attribute",
			description: "Any custom parameter you would like to pass to distinguish between product content",
			token: "custom_attribute",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
(function() {

  // Client Setup
  window.cmSetClientID(
    "" + this.getValueForToken("client_id") + "",
    this.getValueForToken("data_collection_method"),
    "" + this.getValueForToken("data_collection_domain") + "",
    "" + this.getValueForToken("cookie_domain") + ""
  );

  // Page View
  window.cmCreatePageviewTag(
    "" + this.getValueForToken("page_id") + "",
    "" + this.getValueForToken("category_id") + ""
  );

  // Product View
  window.cmCreateProductviewTag(
    "" + this.getValueForToken("product_id") + "",
    "" + this.getValueForToken("product_name") + "",
    "" + this.getValueForToken("category_id") + "",
    "" + this.getValueForToken("custom_attribute") + ""
  );

}());
		/*~POST*/
	}
});