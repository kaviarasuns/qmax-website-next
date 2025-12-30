aws s3 rm s3://qmax-website-v2 --recursive
aws s3 sync ./out s3://qmax-website-v2

aws s3 rm s3://qmaxsys.com --recursive
aws s3 sync ./out s3://qmaxsys.com

aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
