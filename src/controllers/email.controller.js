const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { google } = require("googleapis");

const clientId =
  "138905803774-hl2j7am5d0s8ol8b1ujj5dilj1v54pf4.apps.googleusercontent.com";
const clientSecret = "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";
const clientEmail = "dmytro@getmicroship.com"; //your gmail account you used to set the project up in google cloud console";
const mailFrom = "dmytro@getmicroship.com";
const redirectUri = "https://developers.google.com/oauthplayground";
const refreshToken =
  "1//045snp-dMImxNCgYIARAAGAQSNwF-L9IrwGc4cZuElzZAntWQzJ0VTeDDViZkxQ6_gAOy1v0ssFuoOwLHe-Lku0K5g7sfZXhcJZA";

const sendEmailHtml = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({
        status: false,
        payload: null,
        error: {
          error: "Email required",
          description: "Email required",
        },
        code: 400,
      });

    const OAuth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri
    );

    OAuth2Client.setCredentials({ refresh_token: refreshToken });
    const accessToken = await OAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: clientEmail,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken.token,
      },
    });
    const html = fs.readFileSync(
      path.join(__dirname, "../templates", "html.hbs"),
      {
        encoding: "utf-8",
      }
    );
    const template = handlebars.compile(html);

    const htmlToSend = template({
      name: "Dima",
    });

    const mailOption = {
      from: mailFrom,
      to: email,
      html: htmlToSend,
      subject: `Hey!`,
      text: `Hello!`,
    };

    transport.sendMail(mailOption, (err, info) => {
      if (err) {
        res.status(400).json({
          status: false,
          payload: null,
          error: {
            error: err,
            description: err.toString(),
          },
          code: 400,
        });
      } else {
        return res.status(200).json({
          status: false,
          payload: {
            message: "email send successfully",
          },
          error: null,
          code: 200,
        });
      }
      transport.close();
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        error: error,
        description: error.toString(),
      },
      code: 500,
    });
  }
};

module.exports = {
  sendEmailHtml,
};
