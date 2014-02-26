//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("marinsoftware.conversionpixelrevenueonlyasync.Tag", {
	config: {
		/*DATA*/
		name: "Conversion Pixel - Revenue only async",
		async: true,
		description: "The Javascript will take the values specified below in the array of conversion metrics and send them to Marin along with the Cookie ID (UUID) created by the Click JavaScript; this allows Marin to join Clicks and Conversion data together. This version has fewer metrics for only basic conversion tracking.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Marin.png",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Marin Conversion Type",
			description: "",
			token: "conversion_type",
			uv: ""
		},
		{
			name: "Marin Tracking Id",
			description: "Your unique tracking id",
			token: "tracking_id",
			uv: ""
		},
		{
			name: "Order Total",
			description: "",
			token: "total",
			uv: "universal_variable.transaction.total"
		},
		{
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		},
		{
			name: "Currency",
			description: "",
			token: "currency",
			uv: "universal_variable.transaction.currency"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

(function () {
  window._mTrack = window._mTrack || [];

  window._mTrack.push(['addTrans', {
      currency: "" + this.getValueForToken("currency") + "",
      items: [
        {
          convType: "" + this.getValueForToken("conversion_type") + "",
          price: "" + this.getValueForToken("total") + "",
          orderId: "" + this.getValueForToken("order_id") + ""
        }
      ]
  }]);
  
  window._mTrack.push(['processOrders']);
  (function() {
      var mClientId = "" + this.getValueForToken("tracking_id") + "";
      var mProto = ('https:' == document.location.protocol ? 'https://' : 'http://');
      var mHost = 'tracker.marinsm.com';
      var mt = document.createElement('script'); mt.type = 'text/javascript'; mt.async = true; mt.src = mProto + mHost + '/tracker/async/' + mClientId + '.js';
      var fscr = document.getElementsByTagName('script')[0]; fscr.parentNode.insertBefore(mt, fscr);
  })();
})();


		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});