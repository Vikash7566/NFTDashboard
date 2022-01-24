import React from "react";
import {
  GridViewOutlined,
  StorefrontOutlined,
  InsertDriveFileOutlined,
  ManageAccountsOutlined,
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div>
      <div
        class="w3-sidebar w3-light-grey w3-bar-block"
        style={{ width: "25%" }}
      >
        <h3 class="w3-bar-item">Menu</h3>
        <a href="#" class="w3-bar-item w3-button">
          <GridViewOutlined />
          Dashboard
        </a>
        <a href="#" class="w3-bar-item w3-button">
          <StorefrontOutlined />
          Manage Storefront
        </a>
        <a href="#" class="w3-bar-item w3-button">
          <InsertDriveFileOutlined />
          Manage Content
        </a>
        <a href="#" class="w3-bar-item w3-button">
          <ManageAccountsOutlined />
          Sub Admin
        </a>
      </div>
    </div>
  );
}
