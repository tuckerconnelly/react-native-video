Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _resolveAssetSource=require('react-native/Libraries/Image/resolveAssetSource');var _resolveAssetSource2=_interopRequireDefault(_resolveAssetSource);
var _VideoResizeMode=require('./VideoResizeMode.js');var _VideoResizeMode2=_interopRequireDefault(_VideoResizeMode);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
base:{
overflow:'hidden'}});var



Video=function(_Component){_inherits(Video,_Component);function Video(){var _Object$getPrototypeO;var _temp,_this,_ret;_classCallCheck(this,Video);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_Object$getPrototypeO=Object.getPrototypeOf(Video)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this),_this.





seek=function(time){
_this.setNativeProps({seek:time});
},_this.

presentFullscreenPlayer=function(){
_this.setNativeProps({fullscreen:true});
},_this.

dismissFullscreenPlayer=function(){
_this.setNativeProps({fullscreen:false});
},_this.

_assignRoot=function(component){
_this._root=component;
},_this.

_onLoadStart=function(event){
if(_this.props.onLoadStart){
_this.props.onLoadStart(event.nativeEvent);
}
},_this.

_onLoad=function(event){
if(_this.props.onLoad){
_this.props.onLoad(event.nativeEvent);
}
},_this.

_onError=function(event){
if(_this.props.onError){
_this.props.onError(event.nativeEvent);
}
},_this.

_onProgress=function(event){
if(_this.props.onProgress){
_this.props.onProgress(event.nativeEvent);
}
},_this.

_onSeek=function(event){
if(_this.props.onSeek){
_this.props.onSeek(event.nativeEvent);
}
},_this.

_onEnd=function(event){
if(_this.props.onEnd){
_this.props.onEnd(event.nativeEvent);
}
},_this.

_onFullscreenPlayerWillPresent=function(event){
if(_this.props.onFullscreenPlayerWillPresent){
_this.props.onFullscreenPlayerWillPresent(event.nativeEvent);
}
},_this.

_onFullscreenPlayerDidPresent=function(event){
if(_this.props.onFullscreenPlayerDidPresent){
_this.props.onFullscreenPlayerDidPresent(event.nativeEvent);
}
},_this.

_onFullscreenPlayerWillDismiss=function(event){
if(_this.props.onFullscreenPlayerWillDismiss){
_this.props.onFullscreenPlayerWillDismiss(event.nativeEvent);
}
},_this.

_onFullscreenPlayerDidDismiss=function(event){
if(_this.props.onFullscreenPlayerDidDismiss){
_this.props.onFullscreenPlayerDidDismiss(event.nativeEvent);
}
},_this.

_onReadyForDisplay=function(event){
if(_this.props.onReadyForDisplay){
_this.props.onReadyForDisplay(event.nativeEvent);
}
},_this.

_onPlaybackStalled=function(event){
if(_this.props.onPlaybackStalled){
_this.props.onPlaybackStalled(event.nativeEvent);
}
},_this.

_onPlaybackResume=function(event){
if(_this.props.onPlaybackResume){
_this.props.onPlaybackResume(event.nativeEvent);
}
},_this.

_onPlaybackRateChange=function(event){
if(_this.props.onPlaybackRateChange){
_this.props.onPlaybackRateChange(event.nativeEvent);
}
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Video,[{key:'setNativeProps',value:function setNativeProps(nativeProps){this._root.setNativeProps(nativeProps);}},{key:'render',value:function render()

{
var resizeMode=this.props.resizeMode;
var source=(0,_resolveAssetSource2.default)(this.props.source)||{};

var uri=source.uri;
if(uri&&uri.match(/^\//)){
uri='file://'+uri;
}

var isNetwork=!!(uri&&uri.match(/^https?:/));
var isAsset=!!(uri&&uri.match(/^(assets-library|file|content):/));

var nativeResizeMode=void 0;
if(resizeMode===_VideoResizeMode2.default.stretch){
nativeResizeMode=_reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleToFill;
}else if(resizeMode===_VideoResizeMode2.default.contain){
nativeResizeMode=_reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFit;
}else if(resizeMode===_VideoResizeMode2.default.cover){
nativeResizeMode=_reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleAspectFill;
}else{
nativeResizeMode=_reactNative.NativeModules.UIManager.RCTVideo.Constants.ScaleNone;
}

var nativeProps=_extends({},this.props);
_extends(nativeProps,{
style:[styles.base,nativeProps.style],
resizeMode:nativeResizeMode,
src:{
uri:uri,
isNetwork:isNetwork,
isAsset:isAsset,
type:source.type||'mp4',
mainVer:source.mainVer||0,
patchVer:source.patchVer||0},

onVideoLoadStart:this._onLoadStart,
onVideoLoad:this._onLoad,
onVideoError:this._onError,
onVideoProgress:this._onProgress,
onVideoSeek:this._onSeek,
onVideoEnd:this._onEnd,
onVideoFullscreenPlayerWillPresent:this._onFullscreenPlayerWillPresent,
onVideoFullscreenPlayerDidPresent:this._onFullscreenPlayerDidPresent,
onVideoFullscreenPlayerWillDismiss:this._onFullscreenPlayerWillDismiss,
onVideoFullscreenPlayerDidDismiss:this._onFullscreenPlayerDidDismiss,
onReadyForDisplay:this._onReadyForDisplay,
onPlaybackStalled:this._onPlaybackStalled,
onPlaybackResume:this._onPlaybackResume,
onPlaybackRateChange:this._onPlaybackRateChange});


return(
_react2.default.createElement(RCTVideo,_extends({
ref:this._assignRoot},
nativeProps)));


}}]);return Video;}(_react.Component);exports.default=Video;


Video.propTypes=_extends({
/* Native only */
src:_react.PropTypes.object,
seek:_react.PropTypes.number,
fullscreen:_react.PropTypes.bool,

/* Wrapper component */
source:_react.PropTypes.oneOfType([
_react.PropTypes.shape({
uri:_react.PropTypes.string}),

// Opaque type returned by require('./video.mp4')
_react.PropTypes.number]),

resizeMode:_react.PropTypes.string,
repeat:_react.PropTypes.bool,
paused:_react.PropTypes.bool,
muted:_react.PropTypes.bool,
volume:_react.PropTypes.number,
rate:_react.PropTypes.number,
playInBackground:_react.PropTypes.bool,
playWhenInactive:_react.PropTypes.bool,
controls:_react.PropTypes.bool,
currentTime:_react.PropTypes.number,
onLoadStart:_react.PropTypes.func,
onLoad:_react.PropTypes.func,
onError:_react.PropTypes.func,
onProgress:_react.PropTypes.func,
onSeek:_react.PropTypes.func,
onEnd:_react.PropTypes.func,
onFullscreenPlayerWillPresent:_react.PropTypes.func,
onFullscreenPlayerDidPresent:_react.PropTypes.func,
onFullscreenPlayerWillDismiss:_react.PropTypes.func,
onFullscreenPlayerDidDismiss:_react.PropTypes.func,
onReadyForDisplay:_react.PropTypes.func,
onPlaybackStalled:_react.PropTypes.func,
onPlaybackResume:_react.PropTypes.func,
onPlaybackRateChange:_react.PropTypes.func,

/* Required by react-native */
scaleX:_react.PropTypes.number,
scaleY:_react.PropTypes.number,
translateX:_react.PropTypes.number,
translateY:_react.PropTypes.number,
rotation:_react.PropTypes.number},
_reactNative.View.propTypes);


var RCTVideo=(0,_reactNative.requireNativeComponent)('RCTVideo',Video,{
nativeOnly:{
src:true,
seek:true,
fullscreen:true}});