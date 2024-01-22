Pod::Spec.new do |s|
    s.name              = 'metaoneSDK'
    s.module_name       = 'metaoneSDK'
    s.version           = '1.8.4'
  
    s.summary           = 'Embeddable Wallet SDK for any mobile app'
  
    s.description       = <<-DESC
    Implement a wallet in your app in minutes.
                          DESC
  
    s.homepage     = "https://getmeta.one/"
    s.license      = { :type => "MIT", :file => "LICENSE" }
    s.author             = { "AAG" => "support@aag.ventures" }
    s.social_media_url   = "https://www.linkedin.com/company/aag-ventures/mycompany/"
  
    s.platform          = :ios, '14.0'
    s.source       = { :git => "https://github.com/AAG-Ventures/metaone-ios-sdk-binary.git", :tag => "#{s.version}" }
  
    s.dependency "Alamofire", "~> 4.9.0"
    s.dependency "RxSwift", "~> 6.5.0"
    s.dependency "KeychainSwift", "~> 20.0.0"
    s.dependency "WKWebViewJavascriptBridge"
    s.dependency "lottie-ios"
    s.ios.vendored_frameworks = 'metaoneSDK.xcframework'

    s.requires_arc = true
    s.static_framework = true
  end
