Pod::Spec.new do |spec|
  spec.name         = "metaoneSDK"
  spec.version      = "0.0.1"
  spec.summary      = "Embeddable Wallet SDK for any mobile app"
  spec.description  = <<-DESC
  Implement a wallet in your app in minutes.
                   DESC

  spec.homepage     = "https://getmeta.one/"
  spec.license      = { :type => "MIT", :file => "LICENSE" }
  spec.author             = { "AAG" => "support@aag.ventures" }
  spec.social_media_url   = "https://www.linkedin.com/company/aag-ventures/mycompany/"

  spec.platform     = :ios
  spec.ios.deployment_target = "14.0"

  spec.source       = { :git => "https://github.com/AAG-Ventures/metaone-wallet-ios-sdk.git", :tag => "#{spec.version}" } # WARNING: HAS TO BE A PUBLIC REPO OF YOUR SDK

  spec.source_files = "metaoneSDK/**/*.{swift}"
  spec.resources = ["metaoneSDK/**/*.{png,jpeg,jpg,storyboard,xib,xcassets,ttf,otf,lproj,js,json,strings}"]

  # ――― Project Linking ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  spec.dependency "RxSwift", "~> 6.5.0"
  # spec.dependency "CYBAVOWallet", "~> 1.2.505"
  spec.dependency "KeychainSwift", "~> 20.0.0"
  spec.dependency "WKWebViewJavascriptBridge"
  spec.dependency "lottie-ios"
  
  # spec.xcconfig = {
  #   "ONLY_ACTIVE_ARCH" => "YES",
  #   "EXCLUDED_ARCHS[sdk=iphonesimulator*]" => "arm64"
  # }


  # ――― Project Settings ――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  spec.swift_version = "5.7"
  spec.requires_arc = true
  spec.static_framework = true

end
