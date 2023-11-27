
#import <Foundation/Foundation.h>
#import "RNViewController.h"

@interface RNViewController ()

@property (nonatomic, strong) UIView *mainView;

@end

@implementation RNViewController

-(instancetype)init: (UIView *) view {
  self = [super init];

  self.mainView = view;

  return self;
}

- (void)viewDidLoad {
  [super viewDidLoad];

  self.title = @"Main";
  self.view.backgroundColor = [UIColor blackColor];

  [self setupUI];
}

- (void)setupUI {
  // Load the storyboard
  UIStoryboard *mainStoryboard = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
  
  // Instantiate the view controller from the storyboard
  UIViewController *logoViewController = [mainStoryboard instantiateInitialViewController];

  [self.view addSubview:logoViewController.view];
  [self.view addSubview:self.mainView];

  logoViewController.view.frame = self.view.bounds;
  logoViewController.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
  
  self.mainView.backgroundColor = [UIColor clearColor];
  self.mainView.frame = self.view.bounds;
  self.mainView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    self.mainView.backgroundColor = [UIColor blackColor];
  });
}

@end
